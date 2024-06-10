package entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "scheduleinfo")
@Table(name = "scheduleinfo")
public class SheduleInfoEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int indexnumber;
    private int schedulenumber;
    private String subject;
    private int day;
    private String classroom;
    @Column(name = "start_time")
    private Date startTime;
    @Column(name = "class_time")
    private int classTime;
    private int score;
}
