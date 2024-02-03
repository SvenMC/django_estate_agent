# Generated by Django 4.2.3 on 2023-09-30 09:29

from django.db import migrations, models
import django.db.models.deletion
import estate_agent.helpers.validators


class Migration(migrations.Migration):

    dependencies = [
        ('estate_agent', '0008_alter_propertyimage_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='annual_service_charge',
            field=models.FloatField(default=120.0, null=True),
        ),
        migrations.AddField(
            model_name='property',
            name='bathrooms',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='property',
            name='bedrooms',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='property',
            name='council_tax_band',
            field=models.CharField(choices=[('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D'), ('E', 'E'), ('F', 'F'), ('G', 'G'), ('H', 'H'), ('I', 'I')], default='A', null=True),
        ),
        migrations.AddField(
            model_name='property',
            name='deposit',
            field=models.FloatField(default=123.45, null=True),
        ),
        migrations.AddField(
            model_name='property',
            name='dimensions',
            field=models.CharField(default='678 sq. ft', max_length=80, null=True),
        ),
        migrations.AddField(
            model_name='property',
            name='epc_rating',
            field=models.CharField(choices=[('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D'), ('E', 'E'), ('F', 'F'), ('G', 'G')], default='A', null=True),
        ),
        migrations.AddField(
            model_name='property',
            name='ground_rent',
            field=models.CharField(default='£50 a month', max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='property',
            name='lease_duration',
            field=models.CharField(default='567 Years', max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='property',
            name='move_in_date',
            field=models.CharField(default='March 1st, 2024', max_length=80, null=True),
        ),
        migrations.AddField(
            model_name='property',
            name='payment_schedule',
            field=models.CharField(choices=[('MONTHLY', 'Monthly'), ('WEEKLY', 'Weekly')], default='MONTHLY'),
        ),
        migrations.AddField(
            model_name='property',
            name='price',
            field=models.FloatField(default=567.89),
        ),
        migrations.AddField(
            model_name='property',
            name='property_type',
            field=models.CharField(choices=[('DETACHED', 'Detached'), ('SEMI_DETACHED', 'Semi-detached'), ('TERRACED', 'Terraced'), ('FLAT', 'Flat'), ('BUNGALOW', 'Bungalow'), ('LAND', 'Land'), ('FARM', 'Farm')], default='TERRACED', null=True),
        ),
        migrations.AddField(
            model_name='property',
            name='status',
            field=models.CharField(choices=[('AVAILABLE', 'Available'), ('SOLD', 'Sold'), ('DELISTED', 'Delisted')], default='AVAILABLE'),
        ),
        migrations.AddField(
            model_name='property',
            name='tenure',
            field=models.CharField(choices=[('LEASEHOLD', 'Leasehold'), ('FREEHOLD', 'Freehold')], default='FREEHOLD'),
        ),
        migrations.AddField(
            model_name='property',
            name='title',
            field=models.CharField(default='123 Fake Street', max_length=50),
        ),
        migrations.AlterField(
            model_name='property',
            name='contract_type',
            field=models.CharField(choices=[('RENT', 'Rent'), ('BUY', 'Buy')], default='BUY'),
        ),
        migrations.AlterField(
            model_name='property',
            name='description',
            field=models.TextField(default='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo feugiat risus ut hendrerit. Proin scelerisque lectus nec finibus vulputate. Duis eros risus, blandit at nunc sit amet, pharetra tempor est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ac semper sem. Curabitur aliquet, dolor non lacinia fermentum, ipsum libero viverra lacus, et hendrerit ex dolor sit amet purus. Sed scelerisque vel dolor nec egestas.\n\nProin mattis nunc ac ante bibendum accumsan. Nunc dapibus accumsan mi, ac convallis dolor vestibulum eu. Aliquam felis dui, mattis quis mattis quis, lacinia quis tortor. In turpis diam, ullamcorper non imperdiet a, mollis sit amet metus. Quisque pellentesque augue non mi gravida pulvinar. Vivamus et lacus at purus scelerisque pharetra nec in sem. Ut a aliquet lorem. Donec volutpat aliquet sagittis. Donec ut nunc ac est sagittis aliquam et at elit. Nam porta sem tellus, vel convallis eros sagittis sit amet. Morbi posuere leo augue. Vestibulum facilisis nunc vel magna placerat vulputate. In fermentum massa eget facilisis sagittis. Ut pellentesque iaculis arcu, condimentum suscipit purus lacinia a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed faucibus cursus dolor, gravida ullamcorper nisi venenatis eget.\n\nClass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vel quam sit amet libero gravida accumsan. Duis malesuada euismod felis ac eleifend. Proin fermentum lectus at sem dictum, nec porta enim posuere. Mauris posuere orci est. Praesent auctor, purus in placerat cursus, enim orci dictum nisi, a venenatis ligula ante in odio. Integer nec nibh rhoncus, commodo urna a, pretium metus. Suspendisse laoreet, enim eget sagittis volutpat, lectus enim sollicitudin justo, id sodales diam tellus id tellus. Vestibulum lorem dui, tempus non purus quis, egestas aliquam ipsum. Cras volutpat, mauris quis dapibus tincidunt, sem quam dignissim metus, at viverra libero massa in sem. Cras sed convallis tortor. Phasellus feugiat urna non est aliquet auctor. Proin sit amet ligula nec sem interdum mollis et in risus. Maecenas mattis sollicitudin nisi, et ullamcorper massa auctor eu. Duis nec accumsan elit, et ultrices erat. Morbi convallis augue sapien, at pellentesque nunc finibus et.\n\nIn iaculis magna tempor nunc pretium ultrices. Integer ac imperdiet diam. Maecenas lobortis erat magna, ac vulputate nulla aliquam et. Ut porttitor, nisi sed viverra vehicula, magna velit hendrerit ante, non lacinia odio risus sit amet nulla. Aliquam vestibulum leo non quam consequat, vel auctor ligula tempus. Quisque vel gravida felis. Nullam malesuada, eros ut maximus eleifend, ante eros varius leo, non dapibus quam eros maximus nisl. Sed mattis nisl id facilisis hendrerit. Duis viverra commodo libero eu sodales. Fusce egestas pulvinar dolor, vitae lobortis elit cursus quis. Fusce id pharetra nibh. Quisque eget egestas sapien. Proin porta nulla placerat, tempor tellus ut, posuere ex.\n\nIn efficitur lacus id purus congue euismod. Fusce bibendum interdum est, eu rhoncus nisl. Donec quis ante in urna pharetra hendrerit. Nulla at condimentum nunc. Mauris malesuada risus nec commodo bibendum. Nulla velit turpis, viverra non lorem a, tincidunt condimentum urna. Phasellus fringilla, nisl in fermentum varius, odio nisl malesuada eros, sed rutrum ipsum magna sit amet mi. Etiam cursus id dui in fermentum. Suspendisse interdum neque ac placerat rhoncus. Sed euismod ut lacus sit amet finibus. Aliquam tempus justo nec porta aliquet. Vivamus bibendum diam quis quam volutpat varius.', null=True),
        ),
        migrations.AlterField(
            model_name='propertyimage',
            name='image',
            field=models.ImageField(upload_to='images/', validators=[estate_agent.helpers.validators.image_file_size_limit]),
        ),
        migrations.CreateModel(
            name='PropertyFloorplan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('floorplan', models.ImageField(upload_to='floorplans/', validators=[estate_agent.helpers.validators.image_file_size_limit])),
                ('property', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='estate_agent.property')),
            ],
        ),
    ]
