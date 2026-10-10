namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 400;
    export const ARCADE_SCREEN_HEIGHT = 300;
}
scene.setBackgroundImage(assets.image`yippee`);

let player = sprites.create(assets.image`player`);
controller.moveSprite(player);