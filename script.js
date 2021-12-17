const text = [
    `I'm baby gluten-free tattooed cloud bread you probably haven't heard of them tofu kale chips edison bulb, godard single-origin coffee fam lo-fi. Selvage la croix try-hard portland tacos pork belly hexagon seitan helvetica biodiesel mustache. Swag vinyl poutine, meggings DIY cliche humblebrag. Hot chicken cornhole cronut, trust fund gochujang franzen pabst edison bulb. Air plant af copper mug gentrify synth authentic try-hard tumblr.`,

    `Knausgaard pug trust fund fashion axe lo-fi kickstarter affogato art party YOLO letterpress single-origin coffee iceland copper mug sustainable drinking vinegar. Irony cray squid bespoke williamsburg woke try-hard chartreuse meh microdosing helvetica before they sold out. Tote bag meditation crucifix, adaptogen selvage pinterest tumblr tacos irony disrupt jianbing. Banjo mixtape letterpress kitsch butcher poke tofu chambray tilde man bun. Viral occupy whatever, heirloom chambray ennui everyday carry af godard letterpress poutine messenger bag gastropub. Succulents forage kombucha, meditation shaman austin lomo copper mug schlitz mixtape. Vexillologist truffaut shaman chicharrones, squid keffiyeh tbh raw denim venmo microdosing.`,

    `Selfies fixie activated charcoal microdosing. Tacos tumeric wolf paleo fashion axe man braid palo santo distillery squid swag deep v meggings dreamcatcher readymade. Cardigan glossier neutra meh, church-key wayfarers poutine squid freegan snackwave chambray jean shorts portland. Disrupt hammock succulents gluten-free YOLO.`,

    `Post-ironic waistcoat artisan everyday carry twee pitchfork. Ethical lomo chartreuse pickled VHS. Put a bird on it next level kombucha blog roof party truffaut. Kombucha kogi distillery tbh retro offal. Polaroid humblebrag copper mug organic gentrify tousled. Paleo man bun tbh raclette hot chicken meditation butcher typewriter organic la croix fixie ennui.`,

    `YOLO dreamcatcher pug, meh helvetica blue bottle keffiyeh jean shorts pinterest copper mug. Wolf truffaut unicorn, venmo fingerstache fam street art meh pitchfork squid shabby chic affogato sriracha bushwick disrupt. Meh lumbersexual celiac, selvage art party iPhone coloring book fingerstache air plant pitchfork put a bird on it hammock fashion axe. Glossier crucifix biodiesel godard, narwhal dreamcatcher plaid etsy tumblr VHS austin kitsch organic.`,

    `Shoreditch bitters taiyaki squid. Gentrify biodiesel post-ironic woke hexagon venmo scenester, kinfolk master cleanse leggings cronut. Asymmetrical lyft tilde scenester single-origin coffee. Direct trade leggings kogi, next level squid microdosing taxidermy everyday carry marfa. Af trust fund sartorial vinyl hella prism ennui plaid vice blue bottle migas occupy. Banjo marfa kitsch you probably haven't heard of them artisan drinking vinegar typewriter gluten-free organic.`,

    `Brunch viral microdosing green juice shabby chic lumbersexual scenester copper mug bicycle rights kombucha stumptown. Umami air plant adaptogen hoodie fashion axe plaid messenger bag yr art party pug succulents live-edge photo booth pork belly. Drinking vinegar next level fam ennui mustache hella plaid bitters copper mug viral semiotics waistcoat schlitz distillery. Viral chartreuse dreamcatcher, gentrify irony kale chips pork belly synth before they sold out kitsch meggings lo-fi cray.`,

    `Kickstarter put a bird on it wayfarers, yuccie twee migas chambray venmo deep v cliche kinfolk. You probably haven't heard of them DIY iPhone tbh forage paleo. Marfa post-ironic twee tousled 8-bit, lumbersexual blog trust fund affogato VHS next level neutra retro prism. Tumeric schlitz disrupt subway tile raclette hell of kogi shoreditch fam franzen leggings.`,

    `Godard ennui marfa, asymmetrical fanny pack polaroid lomo banh mi. Taxidermy disrupt master cleanse you probably haven't heard of them. Lumbersexual poutine before they sold out single-origin coffee, letterpress mumblecore kale chips shaman pinterest ennui. Narwhal prism lo-fi, chia bespoke keytar hell of. Banjo etsy jianbing, celiac taiyaki vape glossier. Try-hard snackwave brooklyn godard, four dollar toast coloring book umami wolf taiyaki.`
];

const form = document.querySelector('.lorem-form');
const amount = document.querySelector('#amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = parseInt(amount.value);
    if(value == 0){
        result.innerHTML = "";
    }
    else{
        let tempText = text.slice(0, value);
        tempText
        .map(function(item){
            return `<p class="result">${item}</p>`;
        })
        .join("");
        result.innerHTML = tempText;
    }
});