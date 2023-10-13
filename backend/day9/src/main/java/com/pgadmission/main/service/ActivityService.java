package com.pgadmission.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgadmission.main.model.Activity;
import com.pgadmission.main.repository.ActivityRepo;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepo activityRepository;

    public Activity addActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    public List<Activity> getAllActivity() {
        return activityRepository.findAll();
    }

    public Optional<Activity> getActivityById(Long id) {
        return activityRepository.findById(id);
    }

    public Activity updateActivity(Long id, Activity activity) {
        Optional<Activity> existingActivityOptional = activityRepository.findById(id);

        if (existingActivityOptional.isPresent()) {
            Activity existingActivity = existingActivityOptional.get();
            existingActivity.setActivityType(activity.getActivityType());
            existingActivity.setDuration(activity.getDuration());
            existingActivity.setDistance(activity.getDistance());
            existingActivity.setCalories(activity.getCalories());
            existingActivity.setNotes(activity.getNotes());

            return activityRepository.save(existingActivity);
        } else {
            // Handle the case where the activity with the given ID is not found.
            return null;
        }
    }


    public void deleteActivity(Long id)
    {
    	activityRepository.deleteById(id);
    }
}