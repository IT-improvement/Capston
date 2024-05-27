package entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "user")
@Table(name = "user")
public class Userentity {

    @Id
    private String useremail;
    private String userpassword;
    private String username;
    private String userschool;
    private String userdapartment;
    private String usergrade;
    private String userphonenumber;
    private String userprofileimage;

}
