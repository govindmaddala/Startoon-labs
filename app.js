function onChangeFun() {
    var inputValue = document.getElementById("InputValue").value
    var maxValue = document.getElementById("MaxValue").value
    inputValue = Number(inputValue)
    maxValue = Number(maxValue)
    if (inputValue > maxValue && (maxValue !== "" && inputValue !== "")) {
        window.alert("Input value shouldn't exceed maximum value")
        document.getElementsByClassName('progress-bar')[0].setAttribute('style', 'height: 0%;')
    }
    if (maxValue != 0 && inputValue <= maxValue) {
        const bar = (inputValue / maxValue) * 104
        document.getElementsByClassName('progress-bar')[0].setAttribute('style', `height: ${bar}%;`)
        document.getElementById("InputValue").value = ""
        document.getElementById("MaxValue").value = ""
    }
}