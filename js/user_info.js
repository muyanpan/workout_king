let genderSelect = (
    `<div class="userInput">
    <section class="box columns" id="GenderSelector">
        <div class="tile column"></div>
        <div class="tile">
            <h1 class="header">
                Gender:
            </h1>
            <div class=>
                <label class="">
                    <br><input type="checkbox" id="Male">
                    Male
                    <br><input id="Female" type="checkbox">
                    Female
                    <br><input id="Other" type="checkbox">
                    Other
                    <br><input id="Skip" type="checkbox">
                    Prefer Not To Answer
                </label>
            </div>
        </div>
        <div class="tile column"></div>
    </section>
    </div>`
);

let heightSelect = (
    `<div class="userInput">
    <section class="box columns" id="HeightSelector">
            <div class="tile column"></div>
            <div>
                <div class="field">
                    <label class="header">Height</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Inches" id="endTime">
                    </div>
                </div>
            </div>
            <div class="tile column"></div>
        </section>
    </div>`
);

let weightSelect = (
    `<div class="userInput">
    <section class="box columns" id="WeightSelector">
            <div class="tile column"></div>
            <div>
                <div class="field">
                    <label class="header">Weight</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Pounds" id="endTime">
                    </div>
                </div>
            </div>
            <div class="tile columns"></div>
        </section>
        </div>`
);

let targetWeight = (
    `<div class="userInput">
    <section class="box columns" id="TargetWeight">
            <div class="tile column"></div>
            <div>
                <div class="field">
                    <label class="header">Target Weight</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Pounds" id="endTime">
                    </div>
                </div>
            </div>
            <div class="tile column"></div>
        </section>
        </div>`
);

let allergiesSelect = (
    `<div class="userInput">
    <section class="box columns" id="AllergiesSelector">
            <div class="tile column"></div>
            <div>
                <h1 class="header">Food Allergies</h1>
                <div class="">
                    <label class="">
                        <br><input type="checkbox" id="Nut">
                        Peanut
                        <br><input id="Vege" type="checkbox">
                        Vegetarian
                        <br><input id="Vegan" type="checkbox">
                        Vegan
                        <br><input id="Eyup" type="checkbox">
                        Lactose Intolerant
                        <br><input id="SkipDiet" type="checkbox">
                        Prefer Not To Answer
                    </label>
                </div>
            </div>
            <div class="tile column"></div>
        </section>
        </div>`
);

export const loadUserInfoPage = function() {
    const $root = $('#root');

    let addition = genderSelect;

    $root.append(addition);
}

$(function() {
    loadUserInfoPage();
})
