<?php
class GetInfoController{
	/**
	 * 获取已经报名学生数据
	 */
	public function getInfo(){
		$url = "https://join.xiyoumobile.com/php_Api/getAll.php";
		$post_data = array(
			"key" => "xymbzf155rhl"
		);
		$format = 'json';
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		// post数据
		curl_setopt($ch, CURLOPT_POST, 1);
		// post的变量
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
		$output = curl_exec($ch);
		curl_close($ch);
		echo $output;
	}

	/**
	 * 更新学生面试进度
	 */
	public function updateInfo(){
		if(!isset($_POST['number']) || !isset($_POST['type']) || !isset($_POST['schedule'])){
			$data = array(
				'state' => 0,
				'reason' => '请求参数错误'
			);
			echo JSON($data);
			return;
		}
		$number = $_POST['number'];
		$type = $_POST['type'];
		$time = $_POST['time'];
		$format = 'json';
		$schedule = $_POST['schedule'];
		$url = "https://join.xiyoumobile.com/php_Api/update_api.php";
		$post_data = array(
			"key" => "xymbzf155rhl",
			'number' => $number,
			'time' => $time,
			'type' => $type,
			'schedule' => $schedule
		);
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		// post数据
		curl_setopt($ch, CURLOPT_POST, 1);
		// post的变量
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
		$output = curl_exec($ch);
		curl_close($ch);
		echo $output;
	}
}