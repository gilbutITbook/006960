/*===========================================================================*
 * 트럼프 카드를 만드는 생성자
 *===========================================================================*/
function Card(suit,rank){
	this.suit = suit;	// 슈트 (마크)
	this.rank = rank;	// 번호
	Object.defineProperties(this,{
		color: {
			get: function(){
				switch( this.suit ){
				 	case "Club":    case "Spade": return "black";
				 	case "Diamond": case "Hearts": return "red";
				}
			}
		},
		symbol: {
			get: function(){ return Card.Suit[this.suit]+Card.Rank[this.rank]; }
		}
	});
}
// Card 생성자의 프로퍼티로 카드의 기본 정보를 저장
// * 슈트(마크) 데이터
Card.Suit = { Club: "♣", Spade: "♠", Diamond: "◆", Hearts: "♥" };
// * 번호 데이터
Card.Rank = {
	Two: "2", Three: "3", Four: "4", Five: "5", Six: "6", Seven: "7",
	Eight: "8", Nine: "9", Ten: "10", Jack: "J", Queen: "Q", King: "K", Ace: "A"
};
/*===========================================================================*
 * 새로운 트럼프 카드 조합 (카드 덱)을 만드는 생성자
 *===========================================================================*/
function Deck(){
	var cards = this.cards = [];
	for(var s in Card.Suit){
		for(var r in Card.Rank){
			cards.push(new Card(s,r));
		}
	}
}
// Fisher-Yates 알고리즘으로 카드를 뒤섞는다
Deck.prototype.shuffle = function(){
	var a = this.cards;
	var m = a.length, t, i;
	while(m){
		i = Math.floor(Math.random()*m--);
		t = a[m]; a[m] = a[i]; a[i] = t;
	}
	return this;
};
// 카드를 나누어주는 메서드
Deck.prototype.deal = function(n){
	if( this.cards.length<n ) throw new Error("카드가 없습니다");
	return this.cards.splice(this.cards.length-n,n);
};
