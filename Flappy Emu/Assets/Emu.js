﻿var Round = 1;
var Clone : GameObject;
var RN : UI.Text;
function Start () {

}

function Update () {
transform.Translate(Vector2.left * (Time.deltaTime * (Round + 1) ));
	if (Input.GetKeyDown("space")) {
	GetComponent.<Rigidbody2D>().AddForce(Vector2(0,250));
	GetComponent.<Animator>().SetTrigger("Fly");
	}
	RN.text = Round.ToString();
}

function OnCollisionEnter2D (hit : Collision2D) {
	if (hit.gameObject.tag == "Obstacle") {
	Instantiate(Clone, transform.position, transform.rotation);
	Destroy(gameObject);
	}
	if (hit.gameObject.tag == "Ground") {
	GetComponent.<Animator>().SetBool("Grounded", true);
	}
	if (hit.gameObject.tag == "End") {
	transform.position = Vector2(-14, 17);
	Round += 1;
	}
}

function OnCollisionExit2D (hit : Collision2D) {
if (hit.gameObject.tag == "Ground") {
	GetComponent.<Animator>().SetBool("Grounded", false);
	}
}