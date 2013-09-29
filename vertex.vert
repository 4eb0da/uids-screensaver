precision mediump float;

attribute vec4 a_position;

uniform mat4 u_projectionMatrix;
uniform float time;

varying vec4 v_position;

void main() {
	vec4 pos = u_projectionMatrix * a_position;
    gl_Position = pos;
    v_position = pos;
}