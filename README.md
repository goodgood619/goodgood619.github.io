# goodgood619.github.io
learning markdown language!!

<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>HTML5 Download Demo</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript">
   var str = 'Hello World';
   //Data URI
   var uriEncodedData = 'data:application/text;charset=utf-8,' + encodeURIComponent(str);
   $(document).ready( function() {
	$('#downloadLink').attr('href', uriEncodedData);
   });
</script>
</head>
<body>
<a href='https://examplebuckets3good.s3.ap-northeast-2.amazonaws.com/b5296ca8ffc54fe9b98b93595df804c8.jpg' id="downloadLink" download="test.jpg">다운로드</a>
</body>
</html>
