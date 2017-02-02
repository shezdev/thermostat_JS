$(document).ready(function () {
  adjustTemp()
  resetTemp()
  // changeUnits()
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

// function changeUnits () {
//   $('.bottom button').on('click', function () {
//     var tempRange = $(this).attr('class')
//     tempRange = tempRange.split(' ')[0].split('-')[2]
//     $('.temp-range').text(tempRange)
//   })
// }
function resetTemp () {
  var baseTemp = 20
  var $text = $('.temp-value')

  $('.button-temp-low').on('click', function () {
    $text.text(baseTemp.toString() + "C")
  })
}
