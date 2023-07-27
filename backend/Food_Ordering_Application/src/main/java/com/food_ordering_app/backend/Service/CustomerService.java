package com.food_ordering_app.backend.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food_ordering_app.backend.Model.Customer;
import com.food_ordering_app.backend.Repository.CustomerRepo;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepo cust_repo;
	
	public Customer getCustomerProfile(int id) {
        return cust_repo.findById(id).get();
    }

	public boolean addCustomerProfile(Customer customer) {
		return (cust_repo.save(customer) != null) ? true : false;
	}

	public boolean updateCustomerProfile(Customer customer) {
		return (cust_repo.saveAndFlush(customer) != null) ? true : false;
	}

	public boolean deleteCustomerById(int id) {
		if (cust_repo.findById(id).isPresent()) {
            cust_repo.deleteById(id);
            return true;
        }
        return false;
	}


}
