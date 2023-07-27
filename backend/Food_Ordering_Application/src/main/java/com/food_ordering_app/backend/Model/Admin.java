package com.food_ordering_app.backend.Model;

import java.math.BigInteger;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int admin_id;
	@Column(name = "admin_name" , nullable = false)
	private String admin_name;
	@Column(name = "admin_email" , nullable = false)
	private String admin_email;
	@Column(name = "admin_password" , nullable = false)
	private String admin_password;
	@Column(name="admin_phone_number", nullable =false)
	private BigInteger admin_phone_number;
	
	public Admin()
	{
		
	}

	public Admin(String admin_name, String admin_email, String admin_password , BigInteger admin_phone_number) {
		super();
		this.admin_name = admin_name;
		this.admin_email = admin_email;
		this.admin_password = admin_password;
		this.admin_phone_number = admin_phone_number;
	}
	

	public int getAdmin_id() {
		return admin_id;
	}

	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}

	public String getAdmin_name() {
		return admin_name;
	}

	public void setAdmin_name(String admin_name) {
		this.admin_name = admin_name;
	}

	public String getAdmin_email() {
		return admin_email;
	}

	public void setAdmin_email(String admin_email) {
		this.admin_email = admin_email;
	}

	public String getAdmin_password() {
		return admin_password;
	}

	public void setAdmin_password(String admin_password) {
		this.admin_password = admin_password;
	}

	public BigInteger getAdmin_phone_number() {
		return admin_phone_number;
	}

	public void setAdmin_phone_number(BigInteger admin_phone_number) {
		this.admin_phone_number = admin_phone_number;
	}
	
	
}
