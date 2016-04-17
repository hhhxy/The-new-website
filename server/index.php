<?php
require_once('function.php');
// 设置时区
date_default_timezone_set("Asia/Shanghai");

// 获取控制器名和函数名
if(!isset($_GET['c']) || !isset($_GET['m'])){
	$data = array(
		'code' => 0,
		'msg' => '未获取到控制器名、函数名'
	);
	echo json_encode($data);
	return;
}
$controller = $_GET['c'];
$method = $_GET['m'];

// 判断请求的控制器是否存在
$file_controller = $controller.'Controller.class.php';
if(!file_exists($file_controller)){
	$data = array(
		'code' => 0,
		'msg' => '控制器不存在'
	);
	echo JSON($data);
	return;
}
require_once($file_controller);
// 创建请求的控制器对象实例
$controller .= 'Controller';
$object = new $controller();

// 判断请求的方法是否存在于请求的控制器中
if(!method_exists($object, $method)){
	$data = array(
		'code' => 0,
		'msg' => '类"'.$controller.'"中不存在"'.$method.'"方法'
	);
	echo JSON($data);
	return;
}
$object->$method();