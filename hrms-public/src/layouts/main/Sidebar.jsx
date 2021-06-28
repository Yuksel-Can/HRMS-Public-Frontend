import React from 'react'

export default function Sidebar() {

    return (
        <div>

            <div class="sidebar rounded">
                <strong class="mb-3 mt-3">
                    <h4>Filtreler</h4>
                </strong>
                <div>
                    <aside class="component-job-filter shadow-sm">
                        <form action class="form">
                            <div class="search">
                                <input type="text" class="form-control shadow-sm"
                                    placeholder="Anahtar Kelime Gir" />
                            </div>
                            <hr />
                            <h5 class="font-weight-bold">Çalışma Zamanı</h5>
                            <ul class="checkbox-list">
                                <li>
                                    <label>
                                        <input type="checkbox" name="tümü" id="tümü" defaultChecked />
                                        <span class="checkbox"></span>
                                        <span class="text">Tümü</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="asdf" id="tam_zamanli"/>
                                        <span class="checkbox"></span>
                                        <span class="text">Tam Zamanlı</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="asdf" id="yari_zamanli" />
                                        <span class="checkbox"></span>
                                        <span class="text">Yarı Zamanlı</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" name="asdf" id="asd" />
                                        <span class="checkbox"></span>
                                        <span class="text">Stajyer</span>
                                    </label>
                                </li>
                            </ul>
                            <hr />
                            <h5 class="font-weight-bold mt-3">Çalışma Biçimi</h5>

                            <div class="form-check">
                                <input class="form-check-input" type="radio"
                                    name="calisma_bicimi" id="tümüRadioDefault1" defaultChecked />
                                <label class="form-check-label" for="tümüRadioDefault1">
                                    Tümü
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio"
                                    name="calisma_bicimi" id="yüzyüzeRadioDefault2" />
                                <label class="form-check-label" for="yüzyüzeRadioDefault2">
                                    Yüz Yüze
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio"
                                    name="calisma_bicimi" id="uzaktanRadioDefault3" />
                                <label class="form-check-label" for="uzaktanRadioDefault3">
                                    Uzaktan
                                </label>
                            </div>
                            <hr />
                            <h5 class="font-weight-bold mt-3">Şehir</h5>

                            <select class="form-select form-select-lg mb-3 select-sehir"
                                aria-label=".form-select-lg example">
                                <option selected>Şehir Seçiniz</option>
                                <option value="istanbul">İstanbul</option>
                                <option value="ankara">Ankara</option>
                                <option value="izmir">İzmir</option>
                            </select>

                            <button type="submit" class="home_search_button w-100">ARA</button>
                        </form>

                    </aside>
                </div>
            </div>

        </div>
    )
}