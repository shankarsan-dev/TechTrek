<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Redirecting to eSewa...</title>
</head>
<body>
    <h1>Redirecting to eSewa Payment...</h1>
    <form action="{{ $esewa['action_url'] }}" method="POST" id="esewaForm">
        <input type="hidden" name="tAmt" value="{{ $esewa['tAmt'] }}">
        <input type="hidden" name="amt" value="{{ $esewa['amt'] }}">
        <input type="hidden" name="txAmt" value="{{ $esewa['txAmt'] }}">
        <input type="hidden" name="psc" value="{{ $esewa['psc'] }}">
        <input type="hidden" name="pdc" value="{{ $esewa['pdc'] }}">
        <input type="hidden" name="scd" value="{{ $esewa['scd'] }}">
        <input type="hidden" name="pid" value="{{ $esewa['pid'] }}">
        <input type="hidden" name="su" value="{{ $esewa['su'] }}">
        <input type="hidden" name="fu" value="{{ $esewa['fu'] }}">
    </form>

    <script>
        document.getElementById('esewaForm').submit();
    </script>
</body>
</html>
