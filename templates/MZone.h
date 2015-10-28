//
//  MZone.h
//  Wigo
//
//  Created by Luis Perez Ramirez on 27/10/15.
//  Copyright © 2015 Juan Granados. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface MZone : NSObject

@property (nonatomic, strong) NSString *SSID;
@property (nonatomic, strong) NSString *hotSpotName;
@property (nonatomic, strong) NSString *macAddress;
@property (nonatomic, strong) NSString *city;
@property (nonatomic, strong) NSString *province;
@property (nonatomic, strong) NSString *zip;
@property (nonatomic, strong) NSString *countryPrefix;
@property (nonatomic, strong) NSString *wisprLocationName;
@property (nonatomic, strong) NSString *wisprLocationID;
@property (nonatomic, strong) NSString *latitude;
@property (nonatomic, strong) NSString *longitude;
@property (nonatomic, strong) NSString *hotSpotCategory;
@property (nonatomic, strong) NSString *urlWispr;
@property (nonatomic, strong) NSString *mainHotSpot;
@property (nonatomic, strong) NSString *zoneProfile;
@property (nonatomic, strong) NSString *checkInternet;
@property (nonatomic, strong) NSString *landingPage;



@end
