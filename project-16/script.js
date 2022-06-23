const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];
window.addEventListener('load',()=>{
    document.querySelector('#work .current').innerHTML = data[0]["timeframes"]["weekly"]["current"] + 'hrs'
    document.querySelector('#work .previous').innerHTML = "Last Week - " + data[0]["timeframes"]["weekly"]["previous"] + 'hrs';

    document.querySelector('#play .current').innerHTML = data[1]["timeframes"]["weekly"]["current"] + 'hrs'
    document.querySelector('#play .previous').innerHTML = "Last Week - " + data[1]["timeframes"]["weekly"]["previous"] + 'hrs';

    document.querySelector('#study .current').innerHTML = data[2]["timeframes"]["weekly"]["current"] + 'hrs'
    document.querySelector('#study .previous').innerHTML = "Last Week - " + data[2]["timeframes"]["weekly"]["previous"] + 'hrs';

    document.querySelector('#exercise .current').innerHTML = data[3]["timeframes"]["weekly"]["current"] + 'hrs'
    document.querySelector('#exercise .previous').innerHTML = "Last Week - " + data[3]["timeframes"]["weekly"]["previous"] + 'hrs';

    document.querySelector('#social .current').innerHTML = data[4]["timeframes"]["weekly"]["current"] + 'hrs'
    document.querySelector('#social .previous').innerHTML = "Last Week - " + data[4]["timeframes"]["weekly"]["previous"] + 'hrs';

    document.querySelector('#self-care .current').innerHTML = data[5]["timeframes"]["weekly"]["current"] + 'hrs'
    document.querySelector('#self-care .previous').innerHTML = "Last Week - " + data[5]["timeframes"]["weekly"]["previous"] + 'hrs';
})
const Timeline = document.getElementById('timeline')

Timeline.addEventListener('click',(e)=>{
    Array.from(e.currentTarget.querySelectorAll('p')).forEach(element=>{
        element.classList.remove('text-white');
        element.classList.add('text-Pale-Blue');
    })
    document.querySelector('#work .current').innerHTML = data[0]["timeframes"][e.target.id]["current"] + 'hrs'
    document.querySelector('#work .previous').innerHTML = "Last Week - " + data[0]["timeframes"][e.target.id]["previous"] + 'hrs';

    document.querySelector('#play .current').innerHTML = data[1]["timeframes"][e.target.id]["current"] + 'hrs'
    document.querySelector('#play .previous').innerHTML = "Last Week - " + data[1]["timeframes"][e.target.id]["previous"] + 'hrs';

    document.querySelector('#study .current').innerHTML = data[2]["timeframes"][e.target.id]["current"] + 'hrs'
    document.querySelector('#study .previous').innerHTML = "Last Week - " + data[2]["timeframes"][e.target.id]["previous"] + 'hrs';

    document.querySelector('#exercise .current').innerHTML = data[3]["timeframes"][e.target.id]["current"] + 'hrs'
    document.querySelector('#exercise .previous').innerHTML = "Last Week - " + data[3]["timeframes"][e.target.id]["previous"] + 'hrs';

    document.querySelector('#social .current').innerHTML = data[4]["timeframes"][e.target.id]["current"] + 'hrs'
    document.querySelector('#social .previous').innerHTML = "Last Week - " + data[4]["timeframes"][e.target.id]["previous"] + 'hrs';

    document.querySelector('#self-care .current').innerHTML = data[5]["timeframes"][e.target.id]["current"] + 'hrs'
    document.querySelector('#self-care .previous').innerHTML = "Last Week - " + data[5]["timeframes"][e.target.id]["previous"] + 'hrs';

    e.target.classList.remove('text-Pale-Blue')
    e.target.classList.add('text-white')
})