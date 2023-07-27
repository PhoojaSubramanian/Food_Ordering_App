package com.food_ordering_app.backend.Model;

import java.math.BigInteger;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Delivery {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int delivery_id;
	@Column(name="delivery_person_name" , nullable =false )
	private String delivery_person_name;
	@Column(name="delivery_person_password" , nullable = false)
	private String delivery_person_password;
	@Column(name="delivery_person_email" , nullable = false)
	private String delivery_person_email;
	@Column(name="delivery_person_pNo" , nullable = false)
	private BigInteger delivery_person_pNo;
	@Lob
	@Column(name="delivery_person_image" , columnDefinition = "LONGTEXT")
	private String delivery_person_image;
	@Column(name="delivery_availability", nullable = false)
	private  boolean delivery_availability; 
	@Column(name="delivery_man_location")
	private String delivery_man_location;
	@Column(name="delivery_rating")
	private int delivery_rating;
	@Column(name="delivery_license_plateNo")
	private String delivery_license_plateNo;
	
	public Delivery()
	{
		
	}

	public Delivery( String delivery_person_name, String delivery_person_password,
			String delivery_person_email, BigInteger delivery_person_pNo, String delivery_person_image,
			boolean delivery_availability, String delivery_man_location, int delivery_rating,
			String delivery_license_plateNo) {
		super();
		this.delivery_person_name = delivery_person_name;
		this.delivery_person_password = delivery_person_password;
		this.delivery_person_email = delivery_person_email;
		this.delivery_person_pNo = delivery_person_pNo;
		this.delivery_person_image = delivery_person_image;
		this.delivery_availability = delivery_availability;
		this.delivery_man_location = delivery_man_location;
		this.delivery_rating = delivery_rating;
		this.delivery_license_plateNo = delivery_license_plateNo;
	}

	public int getDelivery_id() {
		return delivery_id;
	}

	public void setDelivery_id(int delivery_id) {
		this.delivery_id = delivery_id;
	}

	public String getDelivery_person_name() {
		return delivery_person_name;
	}

	public void setDelivery_person_name(String delivery_person_name) {
		this.delivery_person_name = delivery_person_name;
	}

	public String getDelivery_person_password() {
		return delivery_person_password;
	}

	public void setDelivery_person_password(String delivery_person_password) {
		this.delivery_person_password = delivery_person_password;
	}

	public String getDelivery_person_email() {
		return delivery_person_email;
	}

	public void setDelivery_person_email(String delivery_person_email) {
		this.delivery_person_email = delivery_person_email;
	}

	public BigInteger getDelivery_person_pNo() {
		return delivery_person_pNo;
	}

	public void setDelivery_person_pNo(BigInteger delivery_person_pNo) {
		this.delivery_person_pNo = delivery_person_pNo;
	}

	public String getDelivery_person_image() {
		return delivery_person_image;
	}

	public void setDelivery_person_image(String delivery_person_image) {
		this.delivery_person_image = delivery_person_image;
	}

	public boolean isDelivery_availability() {
		return delivery_availability;
	}

	public void setDelivery_availability(boolean delivery_availability) {
		this.delivery_availability = delivery_availability;
	}

	public String getDelivery_man_location() {
		return delivery_man_location;
	}

	public void setDelivery_man_location(String delivery_man_location) {
		this.delivery_man_location = delivery_man_location;
	}

	public int getDelivery_rating() {
		return delivery_rating;
	}

	public void setDelivery_rating(int delivery_rating) {
		this.delivery_rating = delivery_rating;
	}

	public String getDelivery_license_plateNo() {
		return delivery_license_plateNo;
	}

	public void setDelivery_license_plateNo(String delivery_license_plateNo) {
		this.delivery_license_plateNo = delivery_license_plateNo;
	}
	
	
}
