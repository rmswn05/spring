package com.multi.Mybatic;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


public class TestController {
	@ResponseBody
	/*
	 @RequestMapping("/")
	public String test() {
		return "boot MyBatis";
		*/
	@RequestMapping("/")
	public String viewIndex() {
		return "index";
}
}

