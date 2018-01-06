// === Game Data ===
var gameData = {
  commandCounter: 0,
  gameOver: false,
  introText:
    "Welcome to Joshua Denenberg's interactive resume! If you are here, it means you are considering hire a new web developer, and I hope you will find I am enthusiastic and knowledgable.",
  outroText: "Thanks For playing!",
  closetOpen: false,
  player: {
    currentLocation: "Entrance",
    inventory: {},
    usedDiploma: false,
    usedKindle: false,
    usedAtari: false
  },
  map: {
    Entrance: {
      firstVisit: true,
      displayName: "Entrance",
      description:
        "...Which is why I have locked you in my office! Mwahaha! And you cannot leave untill you learn a bit more about me!" +
        "\n  To explore, type 'go' followed by the place in the office you want to visit." +
        "\n  To interact with something, type 'look' followed by a noun." +
        "\n  To pick something up, type 'take' followed by the item and type 'use' followed by the name of the item to use it!\n \n",
      items: {},
      exits: {
        desk: {
          displayName: "desk",
          destination: "Desk"
        },
        bookshelf: {
          displayName: "bookshelf",
          destination: "Bookshelf"
        },
        closet: {
          displayName: "closet",
          destination: "Closet"
        },
        exit: {
          displayName: "exit",
          destination: "End"
        }
      }
    },

    Desk: {
      firstVisit: true,
      displayName: "Josh's Desk",
      description:
        "You sit at Josh's desk. It has a Windows laptop running several pieces of audio software and a MacBook running several terminals of predominately javascript and react.js applications. There are several closed desk drawers.\n",
      interactables: {
        desk: {
          look: "It's a sturdy wooden desk!",
          take: "I don't think your pockets are big enough..."
        },
        drawer: {
          take: "Just because you can doesn't mean you should...",
          look:
            "You open the desk drawer to find a kindle! On it has a couple of coding textbooks (Python the Hard Way, FullStack React, and Data Science from Scratch). Alongside it is a Nintendo Switch with 'Splatoon 2' running."
        },
        macbook: {
          take: "Hey! Don't take my MacBook!",
          look:
            "You see several open terminals running multiple projects! They include applications using react, rails, and express. You also see Josh is hard at work learning computer science algorithms, focusing on the Udemy tutorials by Stephen Grider and the Harvard CS50 course!"
        },
        laptop: {
          take: "Hey! Don't take my laptop!",
          look:
            "There's a window of Sibelius notation software running in addition to Ableton Live, Cubase, and Audacity. On the desktop is a dizzying amount of games of too many genres to name but many are small studio, independent games."
        }
      },
      items: {
        kindle: {
          displayName: "Kindle",
          description: "Josh's kindle, which has several coding textbooks.",
          use: function() {
            return useKindle();
          },
          quantity: 1,
          hidden: true
        }
      },
      exits: {
        bookshelf: {
          displayName: "bookshelf",
          destination: "Bookshelf"
        },
        closet: {
          displayName: "closet",
          destination: "Closet"
        },
        exit: {
          displayName: "exit",
          destination: "End"
        }
      }
    },
    Bookshelf: {
      firstVisit: true,
      displayName: "Bookshelf",
      description:
        "There is a sturdy bookshelf that is absolutely overflowing. On it is hundreds of scores of music, literature, writing and research guides, some seemingly ancient Dungeons and Dragons books, and a lot of Kung-Fu dvds. There are also some impressive looking folders sitting on the top of the shelf.\n",
      interactables: {
        folders: {
          look:
            "When you open the folders, you see they are cases for diplomas! One is for the University of Connecticut (BA), the University of Hartford (Masters of Music), and the Univeristy of Toronto (Doctorate of Musical Arts)."
        },
        scores: {
          look: "It is literally too many scores of music to look at!"
        },
        literature: {
          look:
            "You see books ranging from modern poetry to a compliation of the Sherlock Holmes stories. You even see a couple of graphic novels!"
        },
        books: {
          look:
            "You look at the Dungeons and Dragons books and see they are really old! There is a set of the 2nd edition guides and a lot of 3rd edition as well!"
        },
        guides: {
          look:
            "You see the MLA, Chicago, and Turabian research and writing style guides. Clearly Josh knows a lot about research and writing!"
        }
      },
      items: {
        diplomas: {
          displayName: "Diplomas",
          description:
            "Josh's diplomas show his BA from Uconn, Masters from the University of Hartford, and his Doctorate from the University of Toronto.",
          use: function() {
            return readDiploma();
          },
          quantity: 1,
          hidden: true
        }
      },
      exits: {
        desk: {
          displayName: "desk",
          destination: "Desk"
        },
        closet: {
          displayName: "closet",
          destination: "Closet"
        },
        exit: {
          displayName: "exit",
          destination: "End"
        }
      }
    },

    Closet: {
      firstVisit: true,
      description:
        "You stand in front of an open closet. There is a full shelf on the top, some boxes on the bottom, and naturally a fair bit clothing. \n",
      interactables: {
        boxes: {
          look:
            "You look through the boxes on the floor... there's some comics and old notebooks. The notebooks are absolutely filled with shorthand scribblings. It looks like a lot of rails, javascript, react, and redux boilerplate."
        },
        shelf: {
          look:
            "Wow! There's a boxed Atari console from the 1970s! There's also a couple other older consoles--suffice to say it looks like Josh is an afficianod of older electronics."
        }
      },
      items: {
        atari: {
          displayName: "Atari",
          description:
            "This is a bonafidecollectors item in great condition! There's also several weird home-brew games. None of them seem to be by Josh, but it's clear that he's a at least an enthusiast if not hobbiest.",
          use: function() {
            return useAtari();
          },
          quantity: 1,
          hidden: true
        }
      },
      exits: {
        desk: {
          displayName: "desk",
          destination: "Desk"
        },
        bookshelf: {
          displayName: "bookshelf",
          destination: "Bookshelf"
        },
        exit: {
          displayName: "exit",
          destination: "End"
        }
      }
    },

    End: {
      firstVisit: true,
      description: "placeholder",
      setup: function() {
        end();
      }
    }
  }
};

// === Game Actions ===
var gameActions = {
  open: function(game, command, consoleInterface) {
    return consoleInterface(game, command);
  }
};

// === Necessary Exports ===
module.exports.gameData = gameData;
module.exports.gameActions = gameActions;

// === Helper Functions ===

function end() {
  var player = gameData.player;
  if (player.usedDiploma && player.usedKindle && player.usedAtari) {
    gameData.map["End"].description =
      "Congrats! You found all the hidden items around my office.";
    gameData.map["End"].exits = {};
    gameData.gameOver = true;
  } else {
    gameData.map[
      "End"
    ].description = `You need to search harder! There are three unique items to find, and you need to 'use' all of them for more information!`;
    gameData.map["End"].exits = {
      desk: {
        displayName: "desk",
        destination: "Desk"
      },
      bookshelf: {
        displayName: "bookshelf",
        destination: "Bookshelf"
      },
      closet: {
        displayName: "closet",
        destination: "Closet"
      },
      door: {
        displayName: "door out",
        destination: "Door"
      }
    };
  }
}

function handleDoor() {
  if (gameData.closetOpen === false) {
    gameData.closetOpen = true;
    return "You open the door to the closet!";
  } else {
    return "Why would you open a closet door that is already open?";
  }
}

function useKindle() {
  gameData.player.usedKindle = true;
  return "Searching more on the kindle, you find a couple books related to philosophy and technology. Josh clearly spends a lot of his time reading.";
}

function readDiploma() {
  gameData.player.usedDiploma = true;
  return "Reading closer, you see Josh's graduation years of 2010(BA), 2013(Masters), and 2017(Doctorate). Josh is fairly young for having a PhD equivalent education!";
}

function useAtari() {
  gameData.player.usedAtari = true;
  return "You find an old tv in the office and plug it in. Wow, it still works and is lots of fun!";
}
