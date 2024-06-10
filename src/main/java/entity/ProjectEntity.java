package entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "project")
@Table(name = "project")
public class ProjectEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int projectnumer;
    private String title;
    private String subject;
    private String content;
    private int peoplenumber;
    private String period;
    private String useremail;
}
