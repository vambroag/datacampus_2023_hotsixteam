package com.Datacampus.Team5.repository;

import com.Datacampus.Team5.entity.ResponseEntity;
import org.hibernate.sql.Select;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.criteria.From;
import java.util.List;
import java.util.Optional;

public interface ResponseRepository extends JpaRepository<ResponseEntity, Long> {
    @Query(value = "select * from answer as a order by id desc limit 1", nativeQuery = true)
    public ResponseEntity findFirstBy();
}
