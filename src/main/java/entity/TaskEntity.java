package entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Task")
@Table(name = "Task")
public class TaskEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int indexnumber;
    private String tasktitle;
    private String taskcontent;
    @Column(name = "deadline_date")
    private Date deadlineDate;
}
