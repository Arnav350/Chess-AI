var maxDepth = 3;

function min(board, depth) {

 	if (depth >= maxDepth) {
  	
    	board.setScore();
    
    	return board.score;
  
	}

  	var boards = board.generateNewBoardsWhitesTurn();
  
  	var lowestBoardNo = 0;
  
  	var lowestScore = 100000;
  
  	for (var i = 0; i < boards.length; i++) {
  
    	if (!boards[i].isDead()) {
    
      		var score = max(boards[i], depth + 1);
      
      		if (score < lowestScore) {
      
        		lowestBoardNo = i;
        
        		lowestScore = score;
      
      		}
    
    	}
  
  	}
  
  	return lowestScore;

}

function max(board, depth) {

	if (depth >= maxDepth) {
  
    	board.setScore();
    
    	return board.score;
  
  	}

  	var boards = board.generateNewBoardsBlacksTurn();
  
  	var topBoardNo = 0;
  
  	var topScore = -100000;
  
	for (var i = 0; i < boards.length; i++) {

    	var score = minFun(boards[i], depth + 1);
    
    	if (score > topScore) {
    
      		topBoardNo = i;
      
      		topScore = score;
    
    	}
    
  	}

  	if (depth == 0)
    	return boards[topBoardNo];
  
  	return topScore;

}

function minAB(board, alpha, beta, depth) {

  	if (depth >= maxDepth) {
  
    	board.setScore();
  
    	return board.score;
  
  	}
  
  	if (board.isDead()) {
  
    	if (whiteAI && whitesMove)
    		return 200;
    
    	if (blackAI && !whitesMove)
    		return -200;
  
  	}
  
  	if (board.hasWon()) {

    	if (whiteAI && whitesMove)
    		return -200;
    
    	if (blackAI && !whitesMove)
   			return 200;
  
  	}

  	var boards = board.generateNewBoardsWhitesTurn();
  
  	var lowestBoardNo = 0;
  
  	var lowestScore = 300;
  
  	for (var i = 0; i < boards.length; i++) {

    	var score = maxAB(boards[i], alpha, beta, depth + 1);
    
    	if (score < lowestScore) {
    
      		lowestBoardNo = i;
      
      		lowestScore = score;
    
    	} else {
    
      		if (depth == 0 && score == lowestScore) {
        
        		if (random(1) < 0.3)
       				lowestBoardNo = i;
        
      		}
   
		}
    
    	if (score < alpha)
    		return lowestScore;
    
    	if (score < beta)
    		beta = score;

  	}

  	if (depth == 0)
   		return boards[lowestBoardNo];

  	return lowestScore;

}

function maxFunAB(board, alpha, beta, depth) {

  	if (depth >= maxDepth) {
  
    	board.setScore();
    
    	return board.score;
  
  	}

  	if (board.isDead()) {
  
    	if (whiteAI && whitesMove)
    		return 200;
    
    	if (blackAI && !whitesMove)
    		return -200;
  
  	}

  	if (board.hasWon()) {
  
    	if (whiteAI && whitesMove)
   			return -200;
    
    }
    
    if (blackAI && !whitesMove)
    	return 200;
 
}

var boards = board.generateNewBoardsBlacksTurn();
 
  	var topBoardNo = 0;
  
  	var topScore = -300;
  
  	for (var i = 0; i < boards.length; i++) {

    	var score = minAB(boards[i], alpha, beta, depth + 1);
    
    	if (score > topScore) {
    
      		topBoardNo = i;
      
     	 	topScore = score;
    
    	} else {
    
      		if (depth == 0 && score == topScore) {
      
        		if (random(1) < 0.3)
       				topBoardNo = i;
      
			}
    
		}
   
    	if (score > beta)
    		return topScore;
    
    	if (score > alpha)
    		alpha = score;
	
	}

  	if (depth == 0) {
    
    	return boards[topBoardNo];
  
	}
  
  	return topScore;

}
