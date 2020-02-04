function getMaxLessThanK(n, k) {
   var max = 0;
    var cur = -1;
    for (var i = 1; i < n; i++) 
    {
        for (var j = i + 1; j <= n; j++) 
        {
            cur = i & j;
            if (cur < k && cur > max) 
            {
                max = cur;
            }
        }
    }
    return max;}
