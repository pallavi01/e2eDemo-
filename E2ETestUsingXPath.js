 //To create graphing object
    it('should create graphing object', () => {
        // browser.ignoreSynchronization = true;
        //  browser.driver.get(utility.utility.url);
        browser.driver.get('http://localhost:7788/0df431cf-7823-4ce4-b911-5fae463cab3d#/WhiteBoard');
        driver.sleep(20000);
       ////driver.findElement(protractor.By.xpath('//*[@id="main"]/div/div[2]/div[1]/div/div[2]/div[1]/div[1]/div[1]/ul/li[8]/a')).click();
        driver.findElement(protractor.By.xpath('//a[@class="tool-genral-object ng-scope"]')).click();
        driver.findElement(protractor.By.xpath('//a[@class="graphing ng-scope"]')).click();
        driver.sleep(10000);
        var drawingElement = browser.findElement(by.css('.doc5-page1'));
        //console.log(drawingElement);
        browser.actions().mouseMove(drawingElement, { x: 100, y: 100 }).mouseDown().mouseMove({ x: 400, y: 400 }).mouseUp().perform();
        driver.sleep(3000);
        var selectToolPlotPointOption = browser.findElement(by.css('.tool-plot-point'));
        selectToolPlotPointOption.click();
        driver.sleep(3000);
        browser.actions().mouseMove(drawingElement, { x: 230, y: 230 }).mouseDown().mouseUp().perform();
        browser.actions().mouseMove(drawingElement, { x: 300, y: 300 }).mouseDown().mouseUp().perform();
        browser.actions().mouseMove(drawingElement, { x: 380, y: 380 }).mouseDown().mouseUp().perform();
        driver.sleep(3000);
             //select graphing setting tool and select graph axis tool
             //For no axis
            var selectToolGraphSetting = browser.findElement(by.css('.tool-graph-setting'));
            selectToolGraphSetting.click();
            driver.sleep(2000);
            var selectToolAxes = browser.findElement(by.css('.tool-axes'));
            selectToolAxes.click();
            driver.sleep(2000);             
            var selectToolNoAxes = browser.findElement(by.css('.tool-no-axis'));
            selectToolNoAxes.click();
            var selectedAxisVisibility = driver.findElement(protractor.By.xpath('.//*[@style="display:none"]'));
            //var selectedAxisVisibility = element(by.css('.axisVisibility')).getAttribute('style');
            expect(selectedAxisVisibility).toEqual('display: none;');
            driver.sleep(5000);  
        });