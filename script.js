var request=require("request");
var user_id="matt";
var token="Bearer";
var playlist_url="https://api.spotify.com/v1/users/"+user_id+"/playlists";

// request({url:playlist_url,
//         headers:{"Authorisation":token}}, 
//         function(err,res){
//             if(res){
//                 var playlists=JSON.parse(res.body);
//                 var playlist_url=playlists.items[0].href
//                 request({url:playlist_url,
//                     headers:{"Authorisation":token}}, 
//                     function(err,res){
//                         if(res){
//                             var playlist=JSON.parse(res.body);
//                             console.log("playlist" + playlist.name);
//                             playlist.tracks.forEach(function(track){
//                                 console.log(track.track.name);
//                             });
//             }
//         })
//     }
// });
//Client ID 6c8bb0e1c4894f3580fbf79fd64e27ac
//Client Secret ebabb1e34e624a38a647c5182d14716d
//redirect uri https%3A%2F%2Fapi-university.com%2F encoded
//GET(Authorisation end point) https://accounts.spotify.com/authorize?client_id=6c8bb0e1c4894f3580fbf79fd64e27ac&scopes=playlist-read-private&response_type=code&redirect_uri=https%3A%2F%2Fapi-university.com%2F

//6c8bb0e1c4894f3580fbf79fd64e27ac:ebabb1e34e624a38a647c5182d14716d


//authentication token  curl -H "Authorization: Basic NmM4YmIwZTFjNDg5NGYzNTgwZmJmNzlmZDY0ZTI3YWM6ZWJhYmIxZTM0ZTYyNGEzOGE2NDdjNTE4MmQxNDcxNmQ=" -d grant_type=authorization_code -d code=AQDU9k60KEQ9YjygOmkQvqQ98hFNI5RzuQVDalX9mpZXlQF_Gg3mwFUL9jmwHJ1OPlejh2scuZrflTuikkp4iJ2vzyircVvJcggARh3pTXfXPf-vRc5xUlyXw9M-qy9k3rPudYMuL2DgLRkQbbiXT2ZA -d redirect_uri=https%3A%2F%2Fapi-university.com%2F https://accounts.spotify.com/api/token
