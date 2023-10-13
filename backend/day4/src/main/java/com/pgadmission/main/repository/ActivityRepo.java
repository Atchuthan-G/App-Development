package com.pgadmission.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pgadmission.main.model.Activity;

public interface ActivityRepo extends JpaRepository<Activity,Long> {

}
