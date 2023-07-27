package com.food_ordering_app.backend.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.food_ordering_app.backend.Model.Restaurant;
import com.food_ordering_app.backend.Model.Restaurant_Owner;
import com.food_ordering_app.backend.Service.RestaurantService;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class RestaurantController {

	@Autowired
	private RestaurantService rest_ser;

	@GetMapping("/Rest/{id}")
	public Restaurant getRest(@PathVariable int id) {
        return rest_ser.getRestaurant(id);
    }
	
	@GetMapping("/RestAll")
	public List<Restaurant> getRestAll() {
        return rest_ser.getRestaurantAll();
    }

	@PostMapping("/addRest")
	 public String addRest(@RequestBody Restaurant rest) {
        return (rest_ser.addRestaurant(rest)) ? "Restaurant added successfully" : "Restaurant not added";
    }
	
	@PutMapping("/editRest/{id}")
    public String updateRest(@PathVariable int id, @RequestBody Restaurant rest) {
		 return (rest_ser.updateRestaurant(rest)) ? "Restaurant updated successfully" : "Restaurant not updated";
    }
	
	 @DeleteMapping("/Rest/{id}")
	    public String deleteRest(@PathVariable int id) {
	        return (rest_ser.deleteRestaurantById(id)) ? "Restaurant deleted successfully" : "Failed to delete Restaurant";
	    }
}
