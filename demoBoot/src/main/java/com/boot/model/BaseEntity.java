package com.boot.model;

import java.io.*;
import javax.persistence.*;


@MappedSuperclass
@Access (AccessType.FIELD)
public class BaseEntity implements Serializable{

	private static final long serialVersionUID = 7598048881546651935L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id",unique = true, nullable=false)
	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	
}
