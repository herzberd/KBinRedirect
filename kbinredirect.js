const pattern = /!([A-Za-z0-9_]+)@([A-Za-z0-9.-]+)\b/g

var elements = document.getElementsByTagName('a')

for (var i = 0; i < elements.length; i++) {
  const matches = [...elements[i].innerText.matchAll(pattern)]
  if (matches.length > 0) {
    matches.forEach((match) => {
      const topic = match[1]
      const domain = match[2]
      elements[i].href = '/m/' + topic + '@' + domain
    })
  }
}
