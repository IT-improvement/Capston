package entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "applicant")
@Table(name = "applicant")
public class ApplicantEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int applicantnumber;
    private String useremail;
    private int projectnumber;
    private String content;
    private int pass;

}
