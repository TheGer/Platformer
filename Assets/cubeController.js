#pragma strict

var grounded:boolean;

private var anim:Animator;

function Start () {
	grounded = false;
	anim = GetComponent(Animator);
}

function OnTriggerEnter(other:Collider)
{
	if (transform.position.y > other.transform.position.y)
	{
		if (other.gameObject.tag == "ground")
			grounded=true;
	}
}


function OnTriggerStay(other:Collider)
{
	
	if (transform.position.y > other.transform.position.y)
	{
		if (other.gameObject.tag == "ground")
			grounded=true;
	}
}



function FixedUpdate () {
	
	Debug.Log(grounded);
	
	if (Input.GetKeyDown(KeyCode.Space) && (grounded == true))
	{
		//jump
	
		transform.Translate(Vector3.up * 250 * Time.deltaTime);
	}
	
	if (grounded==false)
	{
	transform.Translate(Vector3.up * -10 * Time.deltaTime);
	}
	
	
	transform.Translate(Vector3.right * 10 * Input.GetAxis("Horizontal") * Time.deltaTime);
	
	if (Input.GetAxis("Horizontal")<0)
		anim.SetInteger("movingright",0);
		
	if (Input.GetAxis("Horizontal")>0)
		anim.SetInteger("movingright",1);	
	
	grounded=false;
}