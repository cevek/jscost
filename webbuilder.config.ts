import {Packer, combineJS} from 'webbuilder';
import {ts} from 'webbuilder/dist/plugins/ts';

const packerConfig = {
    dest: '../dist',
    sourceMap: true,
    context: __dirname + '/src/',
    publicPath: '/',
};
const packer = new Packer(packerConfig, promise => {
        return promise
            .then(ts({}))
            .then(combineJS('index.js', 'bundle.js'));
    }
);
packer.run({watch: true});
