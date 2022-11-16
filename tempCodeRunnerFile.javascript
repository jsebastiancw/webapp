var chars = " ,.?;:'!"
var s = "A man, a plan, a canal: Panama"
    
for(var i = 0; i < s ; i++){
    var c = s[i];
    if (chars.inlcudes(c)){
        console.log(c);
        s.replace(c,"");
    };
};

console.log(s)