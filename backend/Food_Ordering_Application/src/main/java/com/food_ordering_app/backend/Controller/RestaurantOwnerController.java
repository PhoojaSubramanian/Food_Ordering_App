package com.food_ordering_app.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.food_ordering_app.backend.Model.Restaurant_Owner;
import com.food_ordering_app.backend.Service.RestaurantOwnerService;


@RestController
public class RestaurantOwnerController {
	
	@Autowired
	private RestaurantOwnerService restOwn_ser;

	@GetMapping("/RestOwn/{id}")
	public Restaurant_Owner getRestOwner(@PathVariable int id) {
        return restOwn_ser.getRestaurantOwner(id);
    }

	@GetMapping("/RestOwnAll")
	public List<Restaurant_Owner> getRestOwnerAll() {
        return restOwn_ser.getRestaurantOwnerAll();
    }
	@PostMapping("/addRestOwn")
	 public String addRestOwn(@RequestBody Restaurant_Owner rest_own) {
        return (restOwn_ser.addRestaurantOwner(rest_own)) ? "Owner added successfully" : "Owner not added";
    }
	
	@PutMapping("/editRestOwn/{id}")
    public String updateRestOwn(@PathVariable int id, @RequestBody Restaurant_Owner rest_own) {
		 return (restOwn_ser.updateRestaurantOwner(rest_own)) ? "Owner updated successfully" : "Owner not updated";
    }
	
	 @DeleteMapping("/RestOwn/{id}")
	    public String deleteRestOwn(@PathVariable int id) {
	        return (restOwn_ser.deleteRestaurantOwnerById(id)) ? "Owner deleted successfully" : "Failed to delete Owner";
	    }

}
