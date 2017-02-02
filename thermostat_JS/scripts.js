$(document).ready(function () {
  adjustTemp()
  resetTemp()
  switchPSM ()
})

function adjustTemp () {
  var baseTemp = 20
  var $text = $('.temp-value')

  $text.text(baseTemp.toString() + 'C')

  $('.button-up').on('click', function () {
    baseTemp += 1
    $text.text(baseTemp.toString() + 'C')
  })

  $('.button-down').on('click', function () {
    baseTemp -= 1
    $text.text(baseTemp.toString() + 'C')
  })
}

function resetTemp () {
  var baseTemp = 20
  var $text = $('.temp-value')

  $('.button-temp-low').on('click', function () {
    $text.text(baseTemp.toString() + "C")
  })
}

// < 18 = low ; between 18 and 25 = medium; above 25 high

function switchPSM () {
  $('.bottom button').on('click', function () {

    var tempRange = $(this).attr('class')
    tempRange = tempRange.split(' ')[0].split('-')[2]
    $('.temp-range').text(tempRange)
  })
}
