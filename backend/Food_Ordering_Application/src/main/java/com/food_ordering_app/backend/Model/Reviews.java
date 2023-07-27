package com.food_ordering_app.backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Reviews {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int review_id;
	@Column(name="rating" , nullable = false)
	private int rating;
	@Column(name="review" , nullable = false)
	private String review;
	
	public Reviews()
	{
		
	}

	public Reviews( int rating, String review) {
		super();
		this.rating = rating;
		this.review = review;
	}

	public int getReview_id() {
		return review_id;
	}

	public void setReview_id(int review_id) {
		this.review_id = review_id;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}
	
	@ManyToOne
    @JoinColumn(name = "review_customer_id", referencedColumnName = "customer_id")
    private Customer customer;

    // Getter and Setter for customer
    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
    
    @ManyToOne
    @JoinColumn(name="review_hotel_id" , referencedColumnName ="restaurant_id")
    private Restaurant restaurant;
    
    public Restaurant getRestaurant()
    {
    	return restaurant;
    }
    
    public void setRestaurant(Restaurant restaurant )
    {
    	this.restaurant=restaurant;
    }
	
}
