// Board Class
class Board {

	// Constructor method
	constructor() {

		This.whitePieces = [];

		this.blackPieces = [];

		this.score = 0;

		this.setupPieces();

	}
	
	// Chess Piece Locations
	setupPieces() {

		// White Sprites
		this.whitePieces.push(new Rook(0, 7, true));
		this.whitePieces.push(new Knight(1, 7, true));
		this.whitePieces.push(new Bishop(2, 7, true));
		this.whitePieces.push(new Queen(3, 7, true));
		this.whitePieces.push(new King(4, 7, true));
		this.whitePieces.push(new Bishop(5, 7, true));
		this.whitePieces.push(new Knight(6, 7, true));
		this.whitePieces.push(new Rook(7, 7, true));
		this.whitePieces.push(new Pawn(0, 6, true));
		this.whitePieces.push(new Pawn(1, 6, true));
		this.whitePieces.push(new Pawn(2, 6, true));
		this.whitePieces.push(new Pawn(3, 6, true));
		this.whitePieces.push(new Pawn(4, 6, true));
		this.whitePieces.push(new Pawn(5, 6, true));
		this.whitePieces.push(new Pawn(6, 6, true));
		this.whitePieces.push(new Pawn(7, 6, true));

		// Black Sprites
		this.blackPieces.push(new Rook(0, 0, false));
		this.blackPieces.push(new Knight(1, 0, false));
		this.blackPieces.push(new Bishop(2, 0, false));
		this.blackPieces.push(new Queen(3, 0, false));
		this.blackPieces.push(new King(4, 0, false));
		this.blackPieces.push(new Bishop(5, 0, false));
		this.blackPieces.push(new Knight(6, 0, false));
		this.blackPieces.push(new Rook(7, 0, false));
		this.blackPieces.push(new Pawn(0, 1, false));
		this.blackPieces.push(new Pawn(1, 1, false));
		this.blackPieces.push(new Pawn(2, 1, false));
		this.blackPieces.push(new Pawn(3, 1, false));
		this.blackPieces.push(new Pawn(4, 1, false));
		this.blackPieces.push(new Pawn(5, 1, false));
		this.blackPieces.push(new Pawn(6, 1, false));
		this.blackPieces.push(new Pawn(7, 1, false));

	}

	// Show the Pieces
	show() {

		for (var i = 0; i < this.whitePieces.length; i++) {

			this.whitePieces[i].show();

		}

		for (var i = 0; i < this.blackPieces.length; i++) {

			this.blackPieces[i].show();

		}

	}

	// To check if a piece is at (x, y) location
	isPieceAt(x, y) {

		for (var i = 0; i < this.whitePieces.length; i++) {

			if (!this.whitePieces[i].taken && this.whitePieces[i].matrixPosition.x == x && this.whitePieces[i].matrixPosition.y == y) {

				return true;
			
			}

		}

		for (var i = 0; i < this.blackPieces.length; i++) {

			if (!this.blackPieces[i].taken && this.blackPieces[i].matrixPosition.x == x && this.blackPieces[i].matrixPosition.y == y) {

				return true;
			
			}

		}

		return false;

	}
	
	// Place piece
	getPieceAt(x, y) {

		for (var i = 0; i < this.whitePieces.length; i++) {

			if (!this.whitePieces[i].taken && this.whitePieces[i].matrixPosition.x == x && this.whitePieces[i].matrixPosition.y == y) {

				return this.whitePieces[i];

			}

		}

		for (var i = 0; i < this.blackPieces.length; i++) {

			if (!this.blackPieces[i].taken && this.blackPieces[i].matrixPosition.x == x && this.blackPieces[i].matrixPosition.y == y) {

				return this.blackPieces[i];

		  	}

		}

		return null;

	}
		
	// New board - White
	generateNewBoardsWhitesTurn() {
	
		var boards = [];
		
		for (var i = 0; i < this.whitePieces.length; i++) {
		
			if (!this.whitePieces[i].taken) {
			
				var tempArr = this.whitePieces[i].generateNewBoards(this);
			
				for (var j = 0; j < tempArr.length; j++) {
			  
					b0ards.push(tempArr[j]);
			
				}
		  
			}
		
		}

		return boards;
	  
	}
	
	// New board - Black
	generateNewBoardsBlacksTurn() {
	
		var boards = [];
		
		for (var i = 0; i < this.blackPieces.length; i++) {
		
			if (!this.blackPieces[i].taken) {
			
				var tempArr = this.blackPieces[i].generateNewBoards(this);
			
				for (var j = 0; j < tempArr.length; j++) {
			  
					boards.push(tempArr[j]);
			
				}
		  
			}
		
		}
		
		return boards;
	  
	}
	
	// Score
	setScore() {		
		
		this.score = 0;
		
		for (var i = 0; i < this.whitePieces.length; i++) {
		
			if (!this.whitePieces[i].taken) {
			
				this.score -= this.whitePieces[i].value;
		  
			}
		
		}
		
		for (var i = 0; i < this.blackPieces.length; i++) {
		
			if (!this.blackPieces[i].taken) {
			
				this.score += this.blackPieces[i].value;
		 
			}
		
		}

	}

	// Move piece
	move(from, to) {
	
		var pieceToMove = this.getPieceAt(from.x, from.y);
		
		if (pieceToMove == null) {
		  
			return;
		
		}
		
		pieceToMove.move(to.x, to.y, this);
		
	}
	
	// Clone
	clone() {
	
		var clone = new Board();
		
		for (var i = 0; i < this.whitePieces.length; i++) {
		
			clone.whitePieces[i] = this.whitePieces[i].clone();
		
		}
		
		for (var i = 0; i < this.blackPieces.length; i++) {
		
			clone.blackPieces[i] = this.blackPieces[i].clone();
		
		}
		
		return clone;
	  
	}

	// Game Ended
	isDone() {
	
		return this.whitePieces[0].taken || this.blackPieces[0].taken;
	
	}
	
	// Dead
	isDead() {
	
		if (whiteAI && whitesMove) {
		
			return this.whitePieces[0].taken;
		
		}
		
		if (blackAI && !whitesMove) {
		
			return this.blackPieces[0].taken;
		
		}

		return false;
	 
	}
	
	// Someone has won
	hasWon() {
	
		if (whiteAI && whitesMove) {
		
			return this.blackPieces[0].taken;
		
		}
		
		if (blackAI && !whitesMove) {
		
			return this.whitePieces[0].taken;
		
		}

		return false;
	  
	}
	
}
