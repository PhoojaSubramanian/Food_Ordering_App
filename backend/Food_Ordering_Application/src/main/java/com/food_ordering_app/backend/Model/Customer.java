package com.food_ordering_app.backend.Model;

import java.math.BigInteger;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;

@Entity
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customer_id;
	@Column (name ="customer_name" , nullable = false , length =50 , unique = true)
	private String customer_name;
	@Column (name ="customer_password" , nullable = false , length = 50)
	private String password ;
	@Column (name ="customer_email", nullable = false , length = 50)
	private String customer_email;
	@Column (name = "customer_phone_number" , nullable = false )
	private BigInteger customer_phone_number;
	@Column (name ="customer_address" , nullable = false)
	private String customer_address ;
	@Lob
	@Column(name="customer_image", columnDefinition = "LONGTEXT")
	private String customer_image;
	
	public Customer()
	{
		
	}

	public Customer( String customer_name, String password, String customer_email,
			BigInteger customer_phone_number, String customer_address , String customer_image) {
		super();
		this.customer_name = customer_name;
		this.password = password;
		this.customer_email = customer_email;
		this.customer_phone_number = customer_phone_number;
		this.customer_address = customer_address;
		this.customer_image = customer_image;
	}

	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCustomer_email() {
		return customer_email;
	}

	public void setCustomer_email(String customer_email) {
		this.customer_email = customer_email;
	}

	public BigInteger getCustomer_phone_number() {
		return customer_phone_number;
	}

	public void setCustomer_phone_number(BigInteger customer_phone_number) {
		this.customer_phone_number = customer_phone_number;
	}

	public String getCustomer_address() {
		return customer_address;
	}

	public void setCustomer_address(String customer_address) {
		this.customer_address = customer_address;
	}

	public String getCustomer_image() {
		return customer_image;
	}

	public void setCustomer_image(String customer_image) {
		this.customer_image = customer_image;
	}
	
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<Reviews> reviews;

    
    public List<Reviews> getReviews() {
        return reviews;
    }

    public void setReviews(List<Reviews> reviews) {
        this.reviews = reviews;
    }
	
}
