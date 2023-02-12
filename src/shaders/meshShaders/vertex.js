import glslCurlNoise from "../curlNoise";
import noise from "../noise";

const vertex = /*glsl*/ `
uniform float time;

${noise}

void main () {
    vec3 pos = position;
    
    float f = 10.;
    float amplitude = 1.;
    float maxDistance = 1.75;
    
    vec3 target = position+curl(pos.x * f, pos.y * f, pos.z * f) * amplitude;

    float d = length(pos-target) / maxDistance;
    pos = mix(position, target, pow(d, 5.));

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 2. * (1. / -mvPosition.z);
}
`;

export default vertex;
