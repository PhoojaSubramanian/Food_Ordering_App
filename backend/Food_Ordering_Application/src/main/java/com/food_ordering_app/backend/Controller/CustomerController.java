package com.food_ordering_app.backend.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.food_ordering_app.backend.Model.Customer;
import com.food_ordering_app.backend.Service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

	@Autowired
	private CustomerService cust_ser;

	@GetMapping("/{id}")
	public Customer getCustomer(@PathVariable int id) {
        return cust_ser.getCustomerProfile(id);
    }

	@PostMapping("/add")
	 public String addCustomer(@RequestBody Customer customer) {
        return (cust_ser.addCustomerProfile(customer)) ? "Customer added successfully" : "Customer not added";
    }
	
	@PutMapping("/edit/{id}")
    public String updateStudent(@PathVariable int id, @RequestBody Customer customer) {
		 return (cust_ser.updateCustomerProfile(customer)) ? "Customer updated successfully" : "Customer not updated";
    }
	
	 @DeleteMapping("/{id}")
	    public String deleteStudent(@PathVariable int id) {
	        return (cust_ser.deleteCustomerById(id)) ? "Customer deleted successfully" : "Failed to delete customer";
	    }
//	 @PutMapping("/add/{id}")
//	 public String updateAddress(@PathVariable int id) {
//		 return (cust_ser.updateAddressById(id)) ? "Customer add updated successfully" : "Failed to update customer add ";
//	 }
}
