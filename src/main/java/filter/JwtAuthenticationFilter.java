package filter;

import java.io.IOException;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.reactsrping.boardback.provider.JwtProvider;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor  //lombok중 하나 필수 생성자를 만듬, final를 생성자로 인식함
public class JwtAuthenticationFilter extends OncePerRequestFilter{
    private final JwtProvider jwtProvider; //final을 통해RequiredArgsConstructor의 생성자

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {

            String token = parseBearerToken(request);

            if(token == null){
                filterChain.doFilter(request, response);
                return;
            }

            String email = jwtProvider.validate(token);

            if(email == null){ //validate에서 SigningKey가 없거나 기간이 만료됐거나
                filterChain.doFilter(request, response);
                return;
            }

            AbstractAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(email, null,AuthorityUtils.NO_AUTHORITIES);
            //인증 요청에 대한 세부정보 / 웹 인증 세부정보 소스 디테일정보 구축
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            //비어있는 콘텍스트를  만듬
            SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
            securityContext.setAuthentication(authenticationToken);//비어있는거에 authentication을 채워준다

            SecurityContextHolder.setContext(securityContext);
        } catch (Exception e) {
            e.printStackTrace();
        }

        filterChain.doFilter(request, response);
    }

    // request에서 header 가져와서 hearder의 authorization 키 찾고,
    //거기서 다시 bearer인증인지 확인하는 작업
    private String parseBearerToken(HttpServletRequest request){

        String authorization = request.getHeader("Authorization");

        boolean hasAuthorization = StringUtils.hasText(authorization); // hasText가 null / 공백 / whitespace가 있으면 false반환 그렇지 않으면 true 반환

        if(!hasAuthorization) return null;

        boolean isBearer = authorization.startsWith("Bearer "); //startsWith: 시작하는문자 확인 return boolean
        if(!isBearer) return null;

        String token = authorization.substring(7);
        return token;
    }
}
