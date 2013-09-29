precision mediump float;

varying vec4 v_position;

uniform float time;

const float colorRange = 0.2;
const float alphaRange = 0.55;
const float halfPI = 1.570796;
const float seed = 0.62541;
const vec3 white = vec3(1.0);

float rand(float seed2){
    return fract(sin(dot(vec2(seed, seed2) ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
	vec2 pos = v_position.xy;
	vec2 rotatedPos;
	vec4 cbuff = vec4(0.0);
	vec3 color;
	vec3 col;
	float alpha;
	float val;
	float dist;
	float angle;

	for (float i = 0.; i < 26.; ++i) {
		angle = rand(i * 5.31);
		rotatedPos = vec2(pos.x * cos(angle) - pos.y * sin(angle), pos.x * sin(angle) + pos.y * cos(angle));
		val = sin((rotatedPos.x + 166. * rand(i + 237.51)) * 0.02 / rand(i * 14.41) + time) * 2. * rand(i + 1424.5125);
		dist = abs(rotatedPos.y - val);
		color = vec3(0.4 * rand(i + 5684.347), 0.5 + 0.5 * rand(i + 684.347), 0.3 * rand(i + 85684.347));
		if (dist < alphaRange) {
			alpha = cos(halfPI * dist / alphaRange);
		} else {
			alpha = 0.;
		}
		col = color;
		cbuff += vec4(col * alpha, 1.);
	}

	css_ColorMatrix = mat4( 1.0, 0.0, 0.0, 0.0,
							0.0, 1.0, 0.0, 0.0,
							0.0, 0.0, 1.0, 0.0,
							0.0, 0.0, 0.0, 1.0 );

	// cbuff.a = 1.0;

	css_MixColor = cbuff;
}