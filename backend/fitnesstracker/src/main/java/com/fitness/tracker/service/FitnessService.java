package com.fitness.tracker.service;


import java.util.List;

import com.fitness.tracker.repository.EventRepo;
import com.fitness.tracker.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FitnessService {
	@Autowired
    EventRepo ar;
	public Event create(Event acad) {
        return ar.save(acad);
    }

	public List<Event> getAllAcademicData() {
		return ar.findAll();
	}

    public Event update(Event a) {
        return ar.save(a);
    }

    public void delete(Long id) {
        ar.deleteById(id);
    }
}
