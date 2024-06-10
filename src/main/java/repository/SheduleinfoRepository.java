package repository;

import entity.SheduleInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SheduleinfoRepository extends JpaRepository<SheduleInfoEntity,Integer> {
}
