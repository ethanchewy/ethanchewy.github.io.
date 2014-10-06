<!DOCTYPE html>
<html>
	<link rel="stylesheet" href="jquery.fancybox-1.3.4.css" type="text/css">
	<script type='text/javascript' src='jquery.min.js'></script>
	<script type='text/javascript' src='jquery.fancybox-1.3.4.pack.js'></script>
	<script type="text/javascript">
		$(function() {
			$("a.group").fancybox({
				'nextEffect'	:	'fade',
				'prevEffect'	:	'fade',
				'overlayOpacity' :  0.8,
				'overlayColor' : '#000000',
				'arrows' : false,
			});			
		});
	</script>

	<?php
		// Supply a user id and an access token
		$userid = "5593cd4fd7a44f0fbdc280640297eb7a";
		$accessToken = "91cc187a20534bc2bf2ba3375a649bdb";

		// Gets our data
		function fetchData($url){
		     $ch = curl_init();
		     curl_setopt($ch, CURLOPT_URL, $url);
		     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		     curl_setopt($ch, CURLOPT_TIMEOUT, 20);
		     $result = curl_exec($ch);
		     curl_close($ch); 
		     return $result;
		}

		// Pulls and parses data.
		$result = fetchData("https://api.instagram.com/v1/users/{$5593cd4fd7a44f0fbdc280640297eb7a}/media/recent/?access_token={$91cc187a20534bc2bf2ba3375a649bdb}");
		$result = json_decode($result);
	?>


	<?php foreach ($result->data as $post): ?>
		<!-- Renders images. @Options (thumbnail,low_resoulution, high_resolution) -->
		<a class="group" rel="group1" href="<?= $post->images->standard_resolution->url ?>"><img src="<?= $post->images->thumbnail->url ?>"></a>
	<?php endforeach ?>
</html>
