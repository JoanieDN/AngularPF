package com.boot.controllers;


import com.boot.model.Car;
import com.boot.services.CarService;
import com.boot.util.*;

import java.io.IOException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class CarController {

	private final CarService carService;
	   
	protected ObjectMapper mapper;
	
    public CarController(CarService carService) {
   
        this.carService = carService;
    }
	
    @PostMapping(value= "/save")
    public RestResponse saveOrUpdate( @RequestBody String userJson) throws JsonParseException, JsonMappingException, IOException {
	
    		this.mapper = new ObjectMapper();
    		Car car = this.mapper.readValue(userJson, Car.class);
 
    		 try {
    			 this.carService.save(car); 
    			 return  new RestResponse(HttpStatus.OK.value(),"Se ha guardado.");
    				
    			} catch (Exception e) {
    				
    				System.out.println("Error"+e);
    				return new RestResponse(HttpStatus.NOT_ACCEPTABLE.value());
    			} 
    		 
	   
   }
    
  @GetMapping (value = "/findAll")
    public List<Car> getUsers() {
    	
	 return  this.carService.findAll();
    		
    }
    
/*
  @PostMapping(value = "/Eliminar")
    public void DeleteUser(@RequestBody String userJson)  throws Exception {
	  
	  this.mapper = new ObjectMapper();
		Car u = this.mapper.readValue(userJson, Car.class);
		
		
	  if (u.getId() == null) {
		  
		  throw new Exception("Necesitas ingresar un id");
		  
	  }
	  
	  else {
	  
		  try {
			  
			  this.userService.deleteUser(u.getId());
			  
		  }
		  catch (Exception e ){
			  
			  System.out.println("Error :C"+ e );
		  }
	  
	  }
	  
  }
  */
    
	
}
