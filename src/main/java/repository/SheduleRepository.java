package repository;

import entity.ScheduleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SheduleRepository extends JpaRepository<ScheduleEntity,Integer> {
}
