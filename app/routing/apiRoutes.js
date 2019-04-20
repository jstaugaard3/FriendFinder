var friendsData = require("../data/friendsData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);

  });


  app.post("/api/friends", function (req, res) {

    friendsData.push(req.body);
    newFriendProfile = req.body;
    var comp = 999999;
    var tempComp = 0;
    var currentBest = {
      name: "",
      photos: "",
      scores: ["",
        ""
      ]
    };

    console.log("Lenght of loop "+friendsData.length);

    for (var i = 0; i < friendsData.length - 1; i++) {
      tempComp = Math.abs(parseInt(friendsData[i].scores[0]) - parseInt(newFriendProfile.scores[0])) +
        Math.abs(parseInt(friendsData[i].scores[1]) - parseInt(newFriendProfile.scores[1]))+
        Math.abs(parseInt(friendsData[i].scores[2]) - parseInt(newFriendProfile.scores[2]))+
        Math.abs(parseInt(friendsData[i].scores[3]) - parseInt(newFriendProfile.scores[3]))+
        Math.abs(parseInt(friendsData[i].scores[4]) - parseInt(newFriendProfile.scores[4]))+
        Math.abs(parseInt(friendsData[i].scores[5]) - parseInt(newFriendProfile.scores[5]))+
        Math.abs(parseInt(friendsData[i].scores[6]) - parseInt(newFriendProfile.scores[6]))+
        Math.abs(parseInt(friendsData[i].scores[7]) - parseInt(newFriendProfile.scores[7]))+
        Math.abs(parseInt(friendsData[i].scores[8]) - parseInt(newFriendProfile.scores[8]))+
        Math.abs(parseInt(friendsData[i].scores[9]) - parseInt(newFriendProfile.scores[9]));

      if (tempComp < comp) {
        currentBest = friendsData[i];
        comp = tempComp;
      }
      tempComp = 0;
    }
    console.log(currentBest);
    res.json(currentBest);
  });


  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    friendsData.length = 0;
    res.json({ ok: "good" });
  });
};
