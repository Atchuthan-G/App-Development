package com.pgadmission.main.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pgadmission.main.constant.Api;
import com.pgadmission.main.model.Activity;
import com.pgadmission.main.service.ActivityService;

@RestController
@RequestMapping(Api.ACTIVITY)
public class ActivityController {
	
	@Autowired
    private ActivityService activityService;


    @PostMapping("/post")
    public Activity addActivity(@RequestBody Activity activity) {
        return activityService.addActivity(activity);
    }

    @GetMapping
    public List<Activity> getAllActivities() {
        return activityService.getAllActivity();
    }

    @GetMapping("/all")
    public Optional<Activity> getActivityById(@PathVariable Long id) {
        return activityService.getActivityById(id);
    }

    @PutMapping("/put")
    public Activity updateActivity(@PathVariable Long id, @RequestBody Activity activity) {
        return activityService.updateActivity(id, activity);
    }
    
    @DeleteMapping("/delete/{id}")
    public void deleteActivity(@PathVariable("id") Long id) {
    	
    	activityService.deleteActivity(id);
    }
}